import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useIsMounted from "./api/utils/useIsMounted";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const mounted = useIsMounted();

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>{mounted && <WalletMultiButton />}</div>

      <div className={styles.main}>
        <h1 className={styles.title}>
          My First Solana Program
        </h1>
      </div>
    </div>
  );
}