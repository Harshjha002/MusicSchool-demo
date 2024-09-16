"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.7,
  damping: 15,
  stiffness: 120,
  restDelta: 0.005,
  restSpeed: 0.005,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="cursor-pointer text-black hover:text-neutral-800 dark:text-white dark:hover:text-neutral-300"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 15 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_2rem)] left-1/2 transform -translate-x-1/2 z-10">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-600 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-lg border border-neutral-200 dark:bg-gray-800 dark:border-neutral-600 bg-white shadow-lg flex justify-center space-x-6 px-8 py-5"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-4 hover:scale-[1.02] transition-transform duration-200">
      <Image
        src={src}
        width={150}
        height={80}
        alt={title}
        className="flex-shrink-0 rounded-lg shadow-lg object-cover"
      />
      <div className="flex flex-col justify-center">
        <h4 className="text-lg font-semibold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm max-w-[12rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
};
