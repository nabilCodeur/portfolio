import profil from "../assets/profil-CV-cropped.jpg";

const Presentation = () => {
  return (
    <div>
      <div className="flex items-center px-2 mb-4 space-x-5">
        <img
          src={profil}
          alt="profil"
          className="object-cover rounded-full size-32"
        />
        <h1 className="">Nabil Benguernane</h1>
      </div>
      <div className="leading-relaxed">
        <h1 className="italic">Développeur React Typescript</h1>
        <p>
          Je crée des applications{" "}
          <span className="px-2 py-1 bg-slate-500">React.</span>
        </p>
      </div>
    </div>
  );
};

export default Presentation;
