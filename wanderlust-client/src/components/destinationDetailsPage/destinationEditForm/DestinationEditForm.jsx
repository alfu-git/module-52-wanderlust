"use client";
import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { PencilLine, Save, Trash2 } from "lucide-react";

const DestinationEditForm = ({ destination }) => {
  const {
    imageUrl,
    country,
    category,
    destinationName,
    price,
    departureDate,
    description,
    duration,
  } = destination;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const destinationUpdateData = Object.fromEntries(formData.entries());
    console.log(destinationUpdateData);
  };

  return (
    <Modal>
      <Button
        className={
          "h-12 px-6 font-medium bg-transparent text-base text-[#0C0B0B] border border-[#B6B6B6] rounded-none"
        }
      >
        <PencilLine size={10} />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-200 rounded-none">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-2xl font-medium font-lora">
                Update Travel Package
              </Modal.Heading>

              <p className="mb-5 text-[#6C696D]">
                Make changes to the travel package details below
              </p>
            </Modal.Header>

            <Modal.Body className="p-2">
              <Surface variant="default">
                <form onSubmit={handleOnSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        name="destinationName"
                        defaultValue={destinationName}
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField name="country" defaultValue={country} isRequired>
                      <Label>Country</Label>
                      <Input className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        name="category"
                        isRequired
                        className="w-full"
                        defaultValue={category}
                      >
                        <Label>Category</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">
                              Beach
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Mountain" textValue="Mountain">
                              Mountain
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="City" textValue="City">
                              City
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Adventure" textValue="Adventure">
                              Adventure
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Cultural" textValue="Cultural">
                              Cultural
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      name="price"
                      defaultValue={price}
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input type="number" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      name="duration"
                      defaultValue={duration}
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        name="departureDate"
                        defaultValue={departureDate}
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        name="imageUrl"
                        defaultValue={imageUrl}
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input type="url" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="description"
                        defaultValue={description}
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea className="rounded-3xl" />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  <Modal.Footer className="flex flex-col gap-4 items-end sm:flex-row">
                    <Button
                      slot="close"
                      className={
                        "h-12 px-6 font-medium bg-transparent text-base text-[#EF4444] border border-[#EF4444] rounded-none"
                      }
                    >
                      <Trash2 size={10} />
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className={
                        "h-12 px-6 font-medium bg-[#15A1BF] text-base text-white rounded-none"
                      }
                    >
                      <Save size={10} />
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DestinationEditForm;
