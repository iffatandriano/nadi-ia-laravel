import React, { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="bg-[url('/images/bg-nadi.png')] bg-cover h-screen">
            <Head title="Log in" />

            <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
                <div className="w-[50vw] h-[40vh] border rounded-md bg-gray-200">
                    <div className="flex flex-col gap-3 p-8">
                        <h4 className="font-bold text-lg text-center">
                            Silahkan Login
                        </h4>
                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}
                        <form onSubmit={submit}>
                            <div className="flex flex-col px-4 py-2 gap-3">
                                <div className="flex flex-row items-center">
                                    <InputLabel
                                        htmlFor="email"
                                        className="flex justify-center items-center w-[40px] h-[40px] mt-1 p-2"
                                    >
                                        <img
                                            src="/icons/mail.svg"
                                            className="w-6 h-6"
                                        />
                                    </InputLabel>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Masukkan email"
                                        className="mt-1 block w-full rounded-r-md rounded-l-none h-[40px]"
                                        autoComplete="email"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                </div>
                                <InputError message={errors.email} />
                                <div className="flex flex-row items-center">
                                    <InputLabel
                                        htmlFor="password"
                                        className="flex justify-center items-center w-[40px] h-[40px] mt-1 p-2"
                                    >
                                        <img
                                            src="/icons/lock.svg"
                                            className="w-6 h-6"
                                        />
                                    </InputLabel>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Masukkan password"
                                        className="mt-1 block w-full rounded-r-md rounded-l-none h-[40px]"
                                        autoComplete="password"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                </div>
                                <InputError message={errors.password} />
                            </div>
                            <div className="flex justify-center mt-6">
                                <PrimaryButton
                                    className="ms-4 w-[100px] h-10 flex items-center justify-center"
                                    disabled={processing}
                                    isLoading={processing}
                                >
                                    Login
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
