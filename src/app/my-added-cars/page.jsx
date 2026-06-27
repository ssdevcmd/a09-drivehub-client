import DeleteAlert from "@/components/DeleteAlert";
import EditModal from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyAddedCarsPage = async ({ car }) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(
        `http://localhost:5000/my-added-cars/${user.id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    );

    const cars = await res.json();

    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="mb-6 text-3xl font-bold">
                My Added Cars
            </h1>

            {cars.length === 0 ? (
                <div className="rounded-2xl border border-dashed p-10 text-center">
                    <h2 className="text-2xl font-semibold">
                        No Cars Added Yet
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Start by adding your first car.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cars.map((car) => (
                        <div
                            key={car._id}
                            className="overflow-hidden rounded-2xl border bg-white shadow"
                        >
                            <Image
                                src={car.image}
                                alt={car.carModel}
                                width={250}
                                height={180}
                                className="h-52 w-full object-cover"
                            />

                            <div className="p-5">
                                <h2 className="text-xl font-bold">
                                    {car.carModel}
                                </h2>

                                <p className="text-gray-500">
                                    {car.brand}
                                </p>

                                <p className="mt-2 text-blue-600 font-semibold">
                                    ${car.dailyRentalPrice}
                                    <span className='text-sm text-gray-400'>/day</span>
                                </p>

                                <div className="mt-6 flex gap-3">
                                    <EditModal car={car} />

                                    <DeleteAlert car={car} />
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            )}
        </div>
    );
};

export default MyAddedCarsPage;