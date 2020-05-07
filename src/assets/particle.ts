import p5 from 'p5';

export default function particle(particle: p5) {
  class Particle {
    private position: { x: number; y: number; add: (velocity: any) => void };
    private size: number;
    private velocity: { x: number; y: number };

    constructor() {
      this.position = particle.createVector(particle.random(0, particle.width), particle.random(0, particle.height));
      this.size = particle.random(10, 50);
      this.velocity = particle.createVector(particle.random(-2, 2), particle.random(-2, 2));
    }

    move() {
      this.position.add(this.velocity);
      this.detectEdges();
    }

    display() {
      particle.noStroke();
      particle.fill('#E53A40');
      particle.circle(this.position.x, this.position.y, this.size);
    }

    detectEdges() {
      if (this.position.x < 0 || this.position.x > particle.width) {
        this.velocity.x *= -1;
      }

      if (this.position.y < 0 || this.position.y > particle.height) {
        this.velocity.y *= -1;
      }
    }

    connectParticles(particles: Particle[]) {
      particles.forEach((item) => {
        const distance = particle.dist(this.position.x, this.position.y, item.position.x, item.position.y);

        if (distance < 120) {
          particle.stroke('#E53A40');
          particle.line(this.position.x, this.position.y, item.position.x, item.position.y);
        }
      });
    }
  }

  const particles: Particle[] = [];

  particle.setup = () => {
    particle.createCanvas(window.innerWidth, window.innerHeight);

    const particlesLength = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < particlesLength; i++) {
      particles.push(new Particle());
    }
  };

  particle.draw = () => {
    particle.background('#30A9DE');

    particles.forEach((particle, index) => {
      particle.move();
      particle.display();
      particle.connectParticles(particles.slice(index));
    });
  };
}
