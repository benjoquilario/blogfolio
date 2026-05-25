"use client"

import * as React from "react"

import { skillset } from "@/lib/config"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import SkillSet from "@/components/shared/skill-set"

interface SkillSetDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SkillSetDialog: React.FC<SkillSetDialogProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] max-w-md flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Full Skill Set List
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            My comprehensive technology stack and tools I work with
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto pr-2">
          <SkillSet title="Frontend Centric" skillSets={skillset.frontend} />
          <SkillSet title="Mobile Development" skillSets={skillset.mobile} />
          <SkillSet title="Backend Centric" skillSets={skillset.backend} />
          <SkillSet title="UI Framework" skillSets={skillset.ui} />
          <SkillSet
            title="Database and Streams"
            skillSets={skillset.database}
          />
          <SkillSet title="Productivity Boost" skillSets={skillset.boost} />
        </div>

        <footer className="border-t pt-4 text-center">
          <p className="text-muted-foreground text-xs">
            *Some micro frameworks not included
          </p>
        </footer>
      </DialogContent>
    </Dialog>
  )
}

export default SkillSetDialog
