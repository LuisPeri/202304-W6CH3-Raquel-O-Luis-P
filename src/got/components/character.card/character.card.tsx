export function Card() {
  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          <li className="character col">
            <div className="card character__card">
              <img
                src="../../public/no-one.jpg"
                alt="Nombre y familia del personaje"
                className="character__picture card-img-top"
              />
              <div className="card-body">
                <h2 className="character__name card-title h4">
                  Nombre y familia
                </h2>
                <div className="character__info">
                  <ul className="list-unstyled">
                    <li>Edad: X años</li>
                    <li>
                      Estado:
                      <i className="fas fa-thumbs-down"></i>
                      <i className="fas fa-thumbs-up"></i>
                    </li>
                  </ul>
                </div>
                <div className="character__overlay">
                  <ul className="list-unstyled">
                    <li>Años de reinado: X</li>
                    <li>Arma: XXX</li>
                    <li>Destreza: X</li>
                    <li>Peloteo: X</li>
                    <li>Asesora a: X</li>
                    <li>Sirve a: X</li>
                  </ul>
                  <div className="character__actions">
                    <button className="character__action btn">habla</button>
                    <button className="character__action btn">muere</button>
                  </div>
                </div>
              </div>
              <i className="emoji"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="comunications">
        <p className="comunications__text display-1">
          Una frase que dice alguien
        </p>
        <img
          className="comunications__picture"
          src="img/no-one.jpg"
          alt="Nombre y familia del que habla"
        />
      </div>
    </>
  );
}
