"use strict"


    const canvas = document.getElementById('confetti-canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const confettiColors = ['#FF0000', '#00FF00', '#0000FF']
    const confettiShapes = ['circle', 'square', 'triangle']
    const confettiSpeed = 25
    const confetti = []

    function createConfetti(x, y) {
      for (let i = 0; i < 100; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * confettiSpeed + 1;
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)]
        const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)]

        confetti.push({
          x,
          y,
          color,
          shape,
          dx: velocity * Math.cos(angle),
          dy: velocity * Math.sin(angle),
        })
      }
    }

    function animateConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < confetti.length; i++) {
        const confetto = confetti[i]
        confetto.x += confetto.dx
        confetto.y += confetto.dy

        ctx.beginPath()
        ctx.fillStyle = confetto.color

        if (confetto.shape === 'circle') {
          ctx.arc(confetto.x, confetto.y, 5, 0, 2 * Math.PI);
        } else if (confetto.shape === 'square') {
          ctx.rect(confetto.x - 5, confetto.y - 5, 10, 10);
        } else if (confetto.shape === 'triangle') {
          ctx.moveTo(confetto.x, confetto.y);
          ctx.lineTo(confetto.x - 5, confetto.y + 10);
          ctx.lineTo(confetto.x + 5, confetto.y + 10);
          ctx.closePath()
        }

        ctx.fill()

        // Remover confetes que saem da tela
        if (confetto.y > canvas.height) {
          confetti.splice(i, 1)
          i--
        }
      }

      if (confetti.length > 0) {
        requestAnimationFrame(animateConfetti)
      }
    }

    $('#buttonSubmti').one("click", function(e) {
      const buttonX = e.pageX;
      const buttonY = e.pageY;

      createConfetti(buttonX, buttonY)
      animateConfetti()
    })

