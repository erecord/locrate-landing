import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ANDROID_BETA_URL,
  ANDROID_GROUP_URL,
  ANDROID_STORE_URL,
} from "@/lib/storeLinks";

type AndroidBetaDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AndroidBetaDialog = ({ open, onOpenChange }: AndroidBetaDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How to join the Android closed beta</DialogTitle>
          <DialogDescription>
            The Android app is currently in closed beta. To get access, complete these two steps in order.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 text-sm text-gray-700">
          <div className="grid grid-cols-[1.5rem_1fr] gap-3">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
              <span className="mt-2 h-full w-px bg-primary/30" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Step 1: join the testing group</p>
              <a
                href={ANDROID_GROUP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4 break-all"
              >
                {ANDROID_GROUP_URL}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-3">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
              <span className="mt-2 h-full w-px bg-primary/30" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Step 2: open the beta link</p>
              <p className="mt-1 text-gray-600">
                After joining the group, use this link to enable beta access in Google Play.
              </p>
              <a
                href={ANDROID_BETA_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-primary underline underline-offset-4 break-all"
              >
                {ANDROID_BETA_URL}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-[1.5rem_1fr] gap-3">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
            </div>
            <div>
              <p className="font-medium text-gray-900">After access is enabled: Play Store listing</p>
              <p className="mt-1 text-gray-600">
                Use the normal app page only after beta access has been enabled on your account.
              </p>
              <a
                href={ANDROID_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-primary underline underline-offset-4 break-all"
              >
                {ANDROID_STORE_URL}
              </a>
            </div>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row">
          <Button asChild variant="outline">
            <a href={ANDROID_GROUP_URL} target="_blank" rel="noreferrer">
              Join Group First
            </a>
          </Button>
          <Button asChild>
            <a href={ANDROID_BETA_URL} target="_blank" rel="noreferrer">
              Then Open Beta Link
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AndroidBetaDialog;
