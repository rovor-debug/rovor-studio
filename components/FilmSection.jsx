"use client";

const FILM_SOURCE = "";
const FILM_POSTER = "";

export default function FilmSection() {
  const hasFilm = Boolean(FILM_SOURCE);

  return (
    <section className="films" id="films" aria-labelledby="films-title">
      <div className="films__inner section-wrap">
        <div className="films__heading">
          <div>
            <div className="section-kicker"><span>03</span><span>Moving image</span><i /></div>
            <h2 className="section-title" id="films-title">Architecture<br /><em>in motion.</em></h2>
          </div>
          <p className="section-heading__aside">Films, visual studies<br />and spatial narratives.</p>
        </div>

        <div className={`films__stage${hasFilm ? " films__stage--active" : ""}`}>
          {hasFilm ? (
            <video
              className="films__video"
              controls
              playsInline
              preload="metadata"
              poster={FILM_POSTER || undefined}
            >
              <source src={FILM_SOURCE} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          ) : (
            <div className="films__placeholder">
              <span className="films__index">ROVOR / FILM 001</span>
              <div className="films__placeholder-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="films__placeholder-copy">
                <span className="films__status">A SPACE FOR MOVING IMAGE</span>
                <p>The next story will unfold here.</p>
              </div>
              <span className="films__duration">COMING SOON</span>
            </div>
          )}
        </div>

        <div className="films__foot">
          <span>FILM / VISUAL NARRATIVE / ATMOSPHERE</span>
          <span>ROVOR STUDIO — 2026</span>
        </div>
      </div>
    </section>
  );
}
