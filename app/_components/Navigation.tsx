import { Button } from "@/components/ui/button";
import { Brain, FileText } from "lucide-react";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <aside className="flex flex-col h-full bg-neutral-50 w-[60px] min-w-[60px] align-middle justify-center gap-5 dark:bg-secondary">
      <div className="max-w-[60px] relative bottom-10">
        <Link href="/documents">
          <Button variant="ghost" direction="vertical" size="custom">
            <FileText className="w-5 h-5 text-muted-foreground" />
            <p className="text-muted-foreground text-xs">Docs</p>
          </Button>
        </Link>
        <Link href="/eldroid">
          <Button variant="ghost" direction="vertical" size="custom">
            <Brain className="w-5 h-5 text-muted-foreground" />
            <p className="text-muted-foreground text-xs">Eldroid</p>
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default Navigation;
