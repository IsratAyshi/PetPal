"use client";

import { motion } from "framer-motion";


export default function AnimatedPetGrid({ children, className }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.12,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}