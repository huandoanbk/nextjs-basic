import styles from "./ProfileCard.module.css";

export default function ProfileCard({
  name,
  role,
  bio,
  accentColor = "#0ea5e9",
  availability = "Available",
}) {
  return (
    <article
      className={`${styles.card} shadow-sm transition hover:shadow-md`}
      style={{ borderLeft: `6px solid ${accentColor}` }}
    >
      <div className={styles.header}>
        <div className={styles.avatar} style={{ backgroundColor: accentColor }}>
          {name?.charAt(0) || "U"}
        </div>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-700">{bio}</p>

      <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
        {availability}
      </span>
    </article>
  );
}
