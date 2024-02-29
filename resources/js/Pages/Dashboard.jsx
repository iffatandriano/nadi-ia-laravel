import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard({ auth }) {
    return (
        <div className="min-h-screen py-2 px-4 bg-gray-100 flex flex-col gap-4">
            <Head title="IA Nadi Test" />
            <nav className="bg-black text-white border-b border-gray-100 rounded-lg">
                <div className="w-full p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-row items-center gap-32">
                            <h2 className="font-bold text-lg">
                                IA - Nadi Test
                            </h2>
                            <Link href="/">
                                <PrimaryButton>Home</PrimaryButton>
                            </Link>
                        </div>
                        <Link href={route("logout")} method="post" as="button">
                            <PrimaryButton className="">Logout</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="w-full h-[250px] md:h-[650px] border rounded-lg border-gray-200 shadow-lg">
                <div className="w-full h-full flex justify-center items-center">
                    <h4 className="font-semibold text-md md:text-lg">
                        Selamat Datang di Nasari Digital.
                    </h4>
                </div>
            </div>
        </div>
    );
}
