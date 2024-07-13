/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JMVMtiVbKkQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

import { usePage } from "@inertiajs/react";
import getImagePath from "@/lib/getImagePath";

interface MenuProp {
    id: number;
    name: string;
    phone: string;
    address_id: number;
    owner_id: number;
    created_at: string;
    updated_at: string;
    description: string;
    origin: string;
    item_name: string;
    image_url: string;
    price: string;
    restaurant_id: number;
    cuisine_id: number;
    cuisine_name: string;
}


export default function MenuComponent() {
    const menu = usePage().props.menu as MenuProp[];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDish, setSelectedDish] = useState<MenuProp | null>(null);
    const [quantity, setQuantity] = useState(1);

    const handleDishClick = (dish: any) => {
        setSelectedDish(dish);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleQuantityChange = (type: string) => {
        if (type === "increment") {
            setQuantity(quantity + 1);
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    };
    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 py-8">
                {menu.map((dish) => (
                    <div
                        key={dish.id}
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                        onClick={() => handleDishClick(dish)}
                    >
                        <div className="relative">
                            <img
                                src={getImagePath(dish.image_url)}
                                alt={dish.item_name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
                                4.9
                            </div>
                            <div className="absolute bottom-2 left-2 bg-background text-foreground px-2 py-1 rounded-md text-sm font-medium">
                                ₱{dish.price}
                            </div>{" "}
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                                {dish.item_name}
                            </h3>
                            <p className="text-muted-foreground">
                                {dish.cuisine_name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedDish && (
                <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
                    <DialogContent className="sm:max-w-[900px] p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <img
                                    src={getImagePath(selectedDish.image_url)}
                                    alt={selectedDish.item_name}
                                    width={800}
                                    height={450}
                                    className="w-full h-auto object-cover rounded-lg aspect-video"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        {selectedDish.item_name}
                                    </h2>
                                    <p className="text-muted-foreground">
                                        {selectedDish.name}
                                    </p>
                                </div>
                                <p>{selectedDish.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <span className="text-lg font-semibold">
                                            4.9
                                            {/* {selectedDish.rating.toFixed(1)} */}
                                        </span>
                                    </div>
                                    <div className="text-lg font-semibold">
                                        ₱{selectedDish.price}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    "decrement"
                                                )
                                            }
                                        >
                                            <MinusIcon className="w-4 h-4" />
                                        </Button>
                                        <span className="text-lg font-semibold">
                                            {quantity}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    "increment"
                                                )
                                            }
                                        >
                                            <PlusIcon className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button>Order Now</Button>
                                        <Button variant="outline">
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
        </svg>
    );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
