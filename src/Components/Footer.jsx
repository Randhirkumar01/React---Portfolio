export default function footer() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Randhirkumar01",
      image:
        "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/randhirkumar-",
      image:
        "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/randhir_kumar_01",
      image:
        "https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@Randhir_kumar_01",
      image:
        "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
    }
  ];
  return (
    <div>
      <footer
        className="w-full h-fit py-6 bg-[#003344] text-[#FF2DAA] font-semibold text-xl flex flex-col
        gap-4 items-center justify-center border-t-1 border-[#999]"
      >
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <div className="socials flex items-center gap-5">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            <img src={social.image} alt={social.name} className="rounded h-8" />
          </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
