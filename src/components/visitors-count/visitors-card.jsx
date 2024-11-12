function VisitorsCard({ image, count }) {
  return (
    <div className="text-center w-fit ms-3 ms-md-5 d-inline-block">
      <img src={image} alt="" className="icons-main" />
      <p className="fs-3">{count}</p>
    </div>
  );
}

export default VisitorsCard;
