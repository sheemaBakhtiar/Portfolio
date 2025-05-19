import React, { useEffect, useState } from "react";

interface Icon {
  id: number;
  src: string;
  size: number;
  position: {
    x: number;
    y: number;
  };
  rotation: number;
  opacity: number;
  speed: {
    x: number;
    y: number;
  };
}

const FloatingIcons: React.FC = () => {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    // Define the icons with random positions and properties
    const iconSources = [
      "/src/public/floating icons/11121454_fi_rr_code_branch_icon.png",
      "/src/public/floating icons/12211864_web_code_programming_development_html_icon.png",
      "/src/public/floating icons/652581_code_command_develop_javascript_language_icon.png",
      "/src/public/floating icons/657801_circles_code_css_css3_line_icon.png",
      "/src/public/floating icons/7422511_github_code_developer_cat_icon.png",
      "/src/public/floating icons/8541771_code_development_icon.png",
      "/src/public/floating icons/9069429_database_code_icon.png",
      "/src/public/floating icons/1012818_code_development_logo_nodejs_icon.png",
      "/src/public/floating icons/12211843_cloud_server_hosting_internet_data_icon.png",
      "/src/public/floating icons/12211877_web_error_internet_issue_problem_icon.png",
      "/src/public/floating icons/7423887_react_react native_icon.png",
    ];

    const newIcons = iconSources.map((src, index) => ({
      id: index,
      src,
      size: Math.random() * 40 + 60, // Random size between 60px and 100px
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.3 + 0.3, // Random opacity between 0.3 and 0.6
      speed: {
        x: (Math.random() - 0.5) * 1.2, // Random speed between -0.6 and 0.6
        y: (Math.random() - 0.5) * 1.2,
      },
    }));

    setIcons(newIcons);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          // Update position
          let newX = icon.position.x + icon.speed.x;
          let newY = icon.position.y + icon.speed.y;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - icon.size) {
            icon.speed.x *= -1;
            newX = Math.max(0, Math.min(newX, window.innerWidth - icon.size));
          }

          if (newY <= 0 || newY >= window.innerHeight - icon.size) {
            icon.speed.y *= -1;
            newY = Math.max(0, Math.min(newY, window.innerHeight - icon.size));
          }

          return {
            ...icon,
            position: {
              x: newX,
              y: newY,
            },
            rotation: (icon.rotation + 0.1) % 360, // Slower rotation
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
        <img
          key={icon.id}
          src={icon.src}
          alt="Floating icon"
          className="absolute"
          style={{
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            left: `${icon.position.x}px`,
            top: `${icon.position.y}px`,
            transform: `rotate(${icon.rotation}deg)`,
            opacity: icon.opacity,
            transition: "transform 0.1s ease-out",
            filter: "hue-rotate(290deg) brightness(1.5) saturate(1.5)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
