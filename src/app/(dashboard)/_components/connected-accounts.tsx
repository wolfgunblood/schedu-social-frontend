'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from 'lucide-react'

interface ConnectedAccount {
    platform: string
    username: string
}

export default function ConnectedAccounts() {
    const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([
        { platform: 'Instagram', username: '@johndoe' },
        { platform: 'Twitter', username: '@johndoe_tweets' }
    ])

    const handleConnect = (platform: string) => {
        if (!isConnected(platform)) {
            const username = `@user_${platform.toLowerCase()}`
            setConnectedAccounts([...connectedAccounts, { platform, username }])
        }
    }

    const handleDisconnect = (platform: string) => {
        setConnectedAccounts(connectedAccounts.filter(account => account.platform !== platform))
    }

    const isConnected = (platform: string) => {
        return connectedAccounts.some(account => account.platform === platform)
    }

    const getAccountBadge = (platform: string) => {
        const account = connectedAccounts.find(account => account.platform === platform)
        if (!account) return null

        return (
            <Badge variant="secondary" className="bg-green-100 text-green-800 flex items-center">
                <span className="truncate max-w-[100px]">{account.username}</span>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        handleDisconnect(platform)
                    }}
                    className="ml-1 text-red-500 hover:text-red-700"
                    aria-label={`Disconnect ${platform}`}
                >
                    <X className="h-3 w-3" />
                </button>
            </Badge>
        )
    }

    const socialPlatforms = [
        { name: 'Instagram', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.982c2.937 0 3.285.011 4.445.064 1.072.049 1.655.228 2.042.379.514.2.88.437 1.265.822.385.385.622.751.822 1.265.151.387.33.97.379 2.042.053 1.16.064 1.508.064 4.445 0 2.937-.011 3.285-.064 4.445-.049 1.072-.228 1.655-.379 2.042-.2.514-.437.88-.822 1.265-.385.385-.751.622-1.265.822-.387.151-.97.33-2.042.379-1.16.053-1.508.064-4.445.064-2.937 0-3.285-.011-4.445-.064-1.072-.049-1.655-.228-2.042-.379-.514-.2-.88-.437-1.265-.822-.385-.385-.622-.751-.822-1.265-.151-.387-.33-.97-.379-2.042-.053-1.16-.064-1.508-.064-4.445 0-2.937.011-3.285.064-4.445.049-1.072.228-1.655.379-2.042.2-.514.437-.88.822-1.265.385-.385.751-.622 1.265-.822.387-.151.97-.33 2.042-.379 1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066-1.171.054-1.97.24-2.67.512-.724.281-1.339.657-1.951 1.27-.613.612-.989 1.227-1.27 1.951-.272.7-.458 1.499-.512 2.67C1.013 8.638 1 9.013 1 12s.013 3.362.066 4.535c.054 1.171.24 1.97.512 2.67.281.724.657 1.339 1.27 1.951.612.613 1.227.989 1.951 1.27.7.272 1.499.458 2.67.512C8.638 22.987 9.013 23 12 23s3.362-.013 4.535-.066c1.171-.054 1.97-.24 2.67-.512.724-.281 1.339-.657 1.951-1.27.613-.612.989-1.227 1.27-1.951.272-.7.458-1.499.512-2.67.053-1.173.066-1.548.066-4.535s-.013-3.362-.066-4.535c-.054-1.171-.24-1.97-.512-2.67-.281-.724-.657-1.339-1.27-1.951-.612-.613-1.227-.989-1.951-1.27-.7-.272-1.499-.458-2.67-.512C15.362 1.013 14.987 1 12 1zm0 5.351c-3.121 0-5.649 2.528-5.649 5.649 0 3.121 2.528 5.649 5.649 5.649 3.121 0 5.649-2.528 5.649-5.649 0-3.121-2.528-5.649-5.649-5.649zm0 9.316c-2.026 0-3.667-1.641-3.667-3.667S9.974 8.333 12 8.333s3.667 1.641 3.667 3.667-1.641 3.667-3.667 3.667zm7.192-9.539c0 .73-.593 1.322-1.322 1.322-.73 0-1.322-.593-1.322-1.322 0-.73.593-1.322 1.322-1.322.73 0 1.322.593 1.322 1.322z" /></svg> },
        { name: 'Twitter', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" /></svg> },
        { name: 'Youtube', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
        { name: 'TikTok', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg> },
        { name: 'Facebook', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
        { name: 'LinkedIn', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
        { name: 'Bluesky', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2L1 11.3l3.3 2.2L7 11.7l1.7 6L12 21l3.3-3.3 1.7-6 2.7 1.8 3.3-2.2L12 2z" /></svg> },
        { name: 'Threads', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V11.5l.007-.043c.084-.477.469-2.019 1.506-3.787 1.112-1.89 2.801-3.326 4.894-4.16.361-.144.718-.216 1.059-.216.99 0 1.787.621 2.115 1.645.074.231.14.471.198.717.265 1.121.446 2.257.542 3.385 1.11-1.236 2.42-2.164 3.884-2.764.574-.236 1.13-.354 1.655-.354 1.043 0 1.886.579 2.236 1.537.295.805.173 1.841-.363 3.083-.501 1.157-1.282 2.203-2.321 3.107-.92.804-1.992 1.479-3.193 2.011.754 1.465 1.786 2.214 3.142 2.214.711 0 1.484-.189 2.298-.561.087-.04.174-.059.257-.059.299 0 .567.192.686.493.155.391.105.987-.134 1.606-.392 1.019-1.224 1.926-2.47 2.696-1.195.738-2.637 1.152-4.285 1.233l-.217.004z" /></svg> },
        { name: 'Pinterest', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg> },
    ]

    return (
        <div className="w-full max-w-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">Connected Accounts</h2>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <Filter className="h-4 w-4 mr-2" />
                    all accounts
                </Button>
            </div>

            <div className="space-y-3">
                {socialPlatforms.map((platform) => (
                    <div key={platform.name} className="flex items-center space-x-3">
                        <Button
                            variant="secondary"
                            className={`w-48 justify-start rounded-lg ${isConnected(platform.name)
                                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                    : 'bg-slate-800 text-white hover:bg-slate-700'
                                }`}
                            onClick={() => handleConnect(platform.name)}
                        >
                            <span className="flex items-center">
                                {platform.icon && <span className="mr-2">{platform.icon}</span>}
                                <span className="truncate">
                                    {isConnected(platform.name) ? 'Connected' : `Connect ${platform.name}`}
                                </span>
                            </span>
                        </Button>
                        {getAccountBadge(platform.name)}
                    </div>
                ))}
            </div>
        </div>
    )
}

