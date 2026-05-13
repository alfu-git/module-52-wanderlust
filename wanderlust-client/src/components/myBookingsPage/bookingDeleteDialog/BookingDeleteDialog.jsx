"use client";
import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

const BookingDeleteDialog = ({ booking, bookingDeleteAction }) => {
  const handleBookingDelete = async (bookingId) => {
    try {
      const res = await bookingDeleteAction(bookingId);

      if (res.deletedCount > 0) {
        toast.warning(`${booking.destinationName} remove from booking list`);
      } else {
        toast.error("Delete failed!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <Button
        className={
          "px-6 h-12 bg-transparent rounded-none text-[#EF4444] border border-[#EF4444] font-medium"
        }
      >
        <Trash2 />
        Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading className="text-2xl font-medium font-lora">
                Delete Booking Package
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-[#6C696D]">
                Are you sure you want to delete &quot;
                <strong className="text-[#0C0B0B]">
                  {booking?.destinationName}
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
                onClick={() => handleBookingDelete(booking?._id)}
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

export default BookingDeleteDialog;
