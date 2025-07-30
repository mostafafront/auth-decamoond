"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/styles/pages/dashboard.module.scss';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");

    if (firstName && lastName) {
      setUser({ firstName, lastName });
    } else {
      router.replace("/");
    }
  }, [router]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <main className={styles.container}>
      <div>
        <h1>JHi {user.firstName} {user.lastName}!</h1>
        <p>Welcome to your Dashboard :)</p>
      </div>
    </main>
  );
}
