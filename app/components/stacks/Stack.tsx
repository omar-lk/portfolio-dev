import React from 'react';
import type { SiteDictionary } from '../../i18n';
import styles from './stack.module.css';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
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

const Stack = ({ copy }: { copy: SiteDictionary['stack'] }) => {
  return (
    <div className={styles.stackContainer}>
      <h1 className={styles.sectionTitle}>{copy.title}</h1>

      <div className={styles.categoryTitle}>{copy.backend}</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiNodedotjs} name="Node.js" />
        <Tech Icon={SiLaravel} name="Laravel" />
      </div>

      <div className={styles.categoryTitle}>{copy.database}</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiPostgresql} name="PostgreSQL" />
        <Tech Icon={SiPrisma} name="Prisma" />
      </div>

      <div className={styles.categoryTitle}>{copy.frontend}</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiReact} name="React.js" />
        <Tech Icon={SiNextdotjs} name="Next.js" />
        <Tech Icon={SiTypescript} name="TypeScript" />
        <Tech Icon={SiTailwindcss} name="Tailwind CSS" />
      </div>

      <div className={styles.categoryTitle}>{copy.devops}</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiDocker} name="Docker" />
        <Tech Icon={SiDigitalocean} name="DigitalOcean" />
        <Tech Icon={SiGithub} name="GitHub / CI" />
      </div>

      <div className={styles.categoryTitle}>{copy.ai}</div>
      <div className={styles.stackRow}>
        <Tech Icon={SiOpenai} name="OpenAI Embeddings" />
        <Tech Icon={SiAnthropic} name="Anthropic Claude" />
        <Tech Icon={SiSupabase} name="Supabase" />
        <TextTag name="pgvector" />
        <TextTag name="MCP" />
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
