import React from 'react';
import styles from './stack.module.css';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiDigitalocean,
  SiGithub,
  SiOpenai,
  SiAnthropic,
  SiSupabase,
} from 'react-icons/si';

type TechProps = {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
};

const Stack = () => {
  return (
    <div className={styles.stackContainer}>
      <h1 className={styles.sectionTitle}>Core Technologies</h1>

      <div className={styles.categoryTitle}>AI / LLM</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiOpenai} name="OpenAI Embeddings" />
        <Tech Icon={SiAnthropic} name="Anthropic Claude" />
        <Tech Icon={SiSupabase} name="Supabase" />
        <TextTag name="pgvector" />
        <TextTag name="MCP" />
      </div>

      <div className={styles.categoryTitle}>Frontend</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiReact} name="React.js" />
        <Tech Icon={SiNextdotjs} name="Next.js" />
        <Tech Icon={SiTypescript} name="TypeScript" />
        <Tech Icon={SiRedux} name="Redux" />
        <Tech Icon={SiTailwindcss} name="Tailwind CSS" />
      </div>

      <div className={styles.categoryTitle}>Backend & APIs</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiNodedotjs} name="Node.js" />
        <Tech Icon={SiLaravel} name="Laravel" />
      </div>

      <div className={styles.categoryTitle}>Database</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiPostgresql} name="PostgreSQL" />
        <Tech Icon={SiPrisma} name="Prisma" />
      </div>

      <div className={styles.categoryTitle}>DevOps</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiDocker} name="Docker" />
        <Tech Icon={SiDigitalocean} name="DigitalOcean" />
        <Tech Icon={SiGithub} name="GitHub / CI" />
      </div>
    </div>
  );
};

const Tech = ({ Icon, name }: TechProps) => {
  return (
    <div className={styles.tooltip} aria-label={name}>
      <div className={styles.iconWrap}>
        <Icon className={styles.icon} />
      </div>
      <span className={styles.tooltiptext}>{name}</span>
    </div>
  );
};

const TextTag = ({ name }: { name: string }) => {
  return (
    <div className={styles.textTag} aria-label={name}>
      {name}
    </div>
  );
};

export default Stack;
