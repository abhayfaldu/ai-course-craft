import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import Image from 'next/image'

function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent title="Loading">
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className="flex flex-col items-center py-10">
              <Image src="/loader.gif" width={80} height={80} alt="kLoading" />
              <h2>Hang in tight! Your course is being Prepared</h2>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LoadingDialog
