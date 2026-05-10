"use client";
import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";

const DestinationDeleteDialog = ({ destination, destinationDeleteAction }) => {
  return (
    <AlertDialog>
      <Button
        slot="close"
        className={
          "h-12 px-6 font-medium bg-transparent text-base text-[#EF4444] border border-[#EF4444] rounded-none"
        }
      >
        <Trash2 size={10} />
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading className="text-2xl font-medium font-lora">
                Delete Travel Package
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-[#6C696D]">
                Are you sure you want to delete &quot;
                <strong className="text-[#0C0B0B]">
                  {destination.destinationName}
                </strong>
                &quot;? This action cannot be undone and will permanently remove
                this travel package from the system.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button
                slot="close"
                variant="tertiary"
                className={"rounded-none"}
              >
                Cancel
              </Button>

              <Button
                onClick={() => destinationDeleteAction(destination._id)}
                slot="close"
                variant="danger"
                className={"rounded-none"}
              >
                <Trash2 />
                Delete Package
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DestinationDeleteDialog;
