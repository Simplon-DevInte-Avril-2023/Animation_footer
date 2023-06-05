function generateBalls() {
    const gooeyAnimations = $(".gooey-animations");
    gooeyAnimations.empty();
  
    const colors = ["#28323B", "#FFA036"];
    for (let i = 0; i < Math.floor(window.innerWidth / 20); i++) {
      const ball = $("<div>").addClass("ball");
      ball.css({
        bottom: "0px",
        left: `${Math.random() * (window.innerWidth - 100)}px`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `translateY(${Math.random() * 10}px)`,
        backgroundColor: colors[i % 2],
      });
      gooeyAnimations.append(ball);
    }
  }
  
  generateBalls();
  window.addEventListener("resize", generateBalls);
  