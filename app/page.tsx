import Image from "next/image";
import styles from "@/styles/pages/auth.module.scss";

export default function Auth() {
  return (
    <main>
      <div className={styles.mainSectoin}>
        <form>
          <div>
            <label htmlFor="inputPhone">INTER YOUR PHONE NUMBER</label>
          </div>
          <div>
            <input
              id="inputPhone"
              type="string"
              placeholder="eg: 09125451232"
              title="iranian number"
            />
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </main>
  );
}
