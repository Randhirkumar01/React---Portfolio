export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Randhirkumar01",
      image:
        "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/randhirkumar-",
      image:
        "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/randhir_kumar_01",
      image:
        "https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Randhir_kumar_01",
      image:
        "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white",
    },
  ];

  return (
    <footer
      className="w-full py-6 bg-[#003344] text-[#FF2DAA]
        flex flex-col gap-4 items-center justify-center
        border-t border-[#999]"
    >
      <p className="text-sm sm:text-base font-semibold text-center">
        © 2025 My Portfolio. All rights reserved.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-200"
          >
            <img
              src={social.image}
              alt={social.name}
              className="rounded h-7 sm:h-8"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
