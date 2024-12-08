
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { demoContent } from "@/constants/data";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc={demoContent.videoSrc}
        thumbnailSrc={demoContent.thumbnail}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc={demoContent.videoSrc}
        thumbnailSrc={demoContent.thumbnail}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

