import styles from "../styles/components/Profile.module.css";
export function Profile() {
  return (
    <div className={styles.profileCotainer}>
      <img src="https://github.com/MatheusBPilon.png" alt="/" />
      <div>
        <strong>Matheus Pilon</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
