"use client";

import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { IoTrashBin } from 'react-icons/io5';

const BookingCancelAlert = ({bookingId}) => {

    const handleCancelBooking = async () => {
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = await res.json();
        // console.log(data);

        window.location.reload();
    }
    return (
        <AlertDialog>
            <Button variant='outline' className='rounded-xl border-red-600 text-red-600 hover:bg-red-600 hover:text-white'><IoTrashBin/> Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingCancelAlert;