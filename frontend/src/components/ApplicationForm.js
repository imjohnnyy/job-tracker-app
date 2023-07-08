import React, { useEffect, useState } from 'react';

// A form for the user to submit their job application details
export default function ApplicationForm() {

    return (
      <div className="flex items-center justify-center bg-lightergray">
        <form className="w-full max-w-sm px-6 py-8 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] bg-white">
            <div className="pr-2 mb-4">
                <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Company </label>
                <input
                    type="company"
                    id="company"
                    className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="position" className="flex items-start mb-2 font-medium text-gray"> Position </label>
                <input
                    type="position"
                    id="position"
                    className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Date </label>
                <input
                    type="date"
                    id="date"
                    className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="type" className="flex items-start mb-2 font-medium text-gray"> Job Type </label>
                <input
                    type="type"
                    id="type"
                    className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Status </label>
                <input
                    type="status"
                    id="status"
                    className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
                />
            </div>
        </form>
    </div>

    );
}