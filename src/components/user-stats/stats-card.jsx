function UserStatsCard({ title, image, count }) {
  return (
    <div className="global-stats-card w-fit d-inline-block column">
      <section className="text-center d-inline-block">
        <img src={image} alt={title + " Count Image"} className="icons-main" />
        <p className="">{title}</p>
      </section>
      <p className="count fw-100 d-inline-block">{count}</p>
    </div>
  );
}

export default UserStatsCard;
