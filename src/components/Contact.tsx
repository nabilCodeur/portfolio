import logo from "@/assets/github-mark.svg";

const Contact = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold uppercase">Me contacter</h1>
      <a
        href="mailto:nabil.Benguernane@gmail.com"
        className="underline underline-offset-2"
      >
        nabil.benguernane@gmail.com
      </a>
      <div className="p-2 mt-4 bg-white rounded-full w-fit h-fit ">
        <a
          href="https://github.com/nabilCodeur/"
          target="_blank"
          className="block"
        >
          <img src={logo} alt="github" className="size-6" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
