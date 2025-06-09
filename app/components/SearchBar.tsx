"use client";
import React from "react";

type SearchBarProps = {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
};

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#23272f] border border-gray-700 text-white focus:outline-none focus:border-yellow-400"
        />
    );
}
