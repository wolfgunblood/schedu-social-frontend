"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ImagePlus, Loader2, X, Maximize2 } from 'lucide-react'
import { toast } from "@/hooks/use-toast"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const formSchema = z.object({
    content: z
        .string()
        .min(1, "Post content is required")
        .max(280, "Post content must not exceed 280 characters"),
    images: z
        .array(z.instanceof(File))
        .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), `Each file size should be less than 5MB.`)
        .refine(
            (files) => files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
            "Only .jpg, .jpeg, .png and .webp files are accepted."
        )
        .optional(),
})

type FormValues = z.infer<typeof formSchema>

export function SocialMediaPostForm() {
    const [imagePreviews, setImagePreviews] = useState<string[]>([])
    const [isExpanded, setIsExpanded] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: "",
            images: [],
        },
    })

    const { isSubmitting } = form.formState

    useEffect(() => {
        // Load saved content from local storage
        const savedContent = localStorage.getItem('postContent')
        if (savedContent) {
            form.setValue('content', savedContent)
        }

        // Load saved image previews from local storage
        const savedPreviews = localStorage.getItem('imagePreviews')
        if (savedPreviews) {
            setImagePreviews(JSON.parse(savedPreviews))
        }
    }, [form])

    useEffect(() => {
        // Save content to local storage whenever it changes
        const subscription = form.watch((value) => {
            localStorage.setItem('postContent', value.content || '')
        })
        return () => subscription.unsubscribe()
    }, [form])

    useEffect(() => {
        // Save image previews to local storage whenever they change
        localStorage.setItem('imagePreviews', JSON.stringify(imagePreviews))
    }, [imagePreviews])

    function onSubmit(values: FormValues) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })
        // Clear local storage after successful submission
        localStorage.removeItem('postContent')
        localStorage.removeItem('imagePreviews')
        form.reset()
        setImagePreviews([])
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        const currentImages = form.getValues("images") || []
        const newImages = [...currentImages, ...files].slice(0, 9) // Limit to 9 images
        form.setValue("images", newImages)

        const newPreviews = files.map((file) => URL.createObjectURL(file))
        setImagePreviews((prev) => [...prev, ...newPreviews].slice(0, 9)) // Limit to 9 previews
    }

    const removeImage = (index: number) => {
        const currentImages = form.getValues("images") || []
        const newImages = currentImages.filter((_, i) => i !== index)
        form.setValue("images", newImages)

        setImagePreviews((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Create a Post</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Post Content</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Textarea
                                                placeholder="What's on your mind?"
                                                className={`resize-none transition-all duration-200 ease-in-out ${isExpanded ? 'h-64' : 'h-24'}`}
                                                {...field}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute bottom-2 right-2"
                                                onClick={() => setIsExpanded(!isExpanded)}
                                            >
                                                <Maximize2 className="h-4 w-4" />
                                                <span className="sr-only">
                                                    {isExpanded ? 'Shrink post area' : 'Expand post area'}
                                                </span>
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormDescription>
                                        Your post content. Max 280 characters.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="images"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Images</FormLabel>
                                    <FormControl>
                                        <div className="space-y-4">
                                            <Input
                                                type="file"
                                                accept={ACCEPTED_IMAGE_TYPES.join(",")}
                                                className="hidden"
                                                id="image-upload"
                                                multiple
                                                onChange={handleImageUpload}
                                            />
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => document.getElementById("image-upload")?.click()}
                                            >
                                                <ImagePlus className="mr-2 h-4 w-4" />
                                                Upload Images
                                            </Button>
                                            <div className="grid grid-cols-3 gap-2">
                                                {imagePreviews.map((preview, index) => (
                                                    <div key={index} className="relative aspect-square">
                                                        <img
                                                            src={preview}
                                                            alt={`Preview ${index + 1}`}
                                                            className="absolute inset-0 h-full w-full object-cover rounded"
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="destructive"
                                                            size="icon"
                                                            className="absolute top-0 right-0 h-5 w-5 rounded-full"
                                                            onClick={() => removeImage(index)}
                                                        >
                                                            <X className="h-3 w-3" />
                                                            <span className="sr-only">Remove image</span>
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormDescription>
                                        Upload up to 9 images for your post (optional). Max 5MB per image. Accepted formats: .jpg, .jpeg, .png, .webp
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting} onClick={form.handleSubmit(onSubmit)}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Post
                </Button>
            </CardFooter>
        </Card>
    )
}

