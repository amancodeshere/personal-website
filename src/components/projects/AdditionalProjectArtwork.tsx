import styles from "./AdditionalProjectArtwork.module.css";

/** Authored, code-native project previews for work without a suitable capture. */
export function AdditionalProjectArtwork({ visual }: { visual: string }) {
  switch (visual) {
    case "music":
      return <MusicPreview />;
    case "security":
      return <SecurityPreview />;
    case "battlecode":
      return <BattlecodePreview />;
    case "botfluencer":
      return <BotfluencerPreview />;
    default:
      return null;
  }
}

function MusicPreview() {
  return (
    <section
      className={styles.music}
      aria-label="Illustrative music recommendation profile"
    >
      <header className={styles.musicHeader}>
        <div>
          <b>side A</b>
          <span>LYRIC-LED DISCOVERY</span>
        </div>
        <span className={styles.sampleTag}>SAMPLE PROFILE</span>
      </header>
      <div className={styles.musicBody}>
        <section className={styles.topicProfile}>
          <div className={styles.panelHeading}>
            <h2>What stays with you</h2>
            <span>topic profile</span>
          </div>
          <p>Words from saved songs shape a profile for each theme.</p>
          <div className={styles.topicRows}>
            <Topic label="dark" value="72%" width="72%" tone="darkTone" />
            <Topic label="emotion" value="46%" width="46%" tone="emotionTone" />
            <Topic label="lifestyle" value="31%" width="31%" tone="lifeTone" />
            <Topic
              label="personal"
              value="58%"
              width="58%"
              tone="personalTone"
            />
            <Topic label="sadness" value="64%" width="64%" tone="sadTone" />
          </div>
          <small>Illustrative topic weights</small>
        </section>
        <section className={styles.trackPanel}>
          <div className={styles.panelHeading}>
            <h2>For this profile</h2>
            <span>lyrics + topic</span>
          </div>
          <Track
            title="Paper Moons"
            artist="Mira Vale"
            topic="personal"
            note="Shared language"
          />
          <Track
            title="Blue Hour Again"
            artist="North Arcade"
            topic="sadness"
            note="Profile similarity"
          />
          <Track
            title="Soft Landing"
            artist="June Static"
            topic="emotion"
            note="Related theme"
          />
        </section>
      </div>
    </section>
  );
}

function Topic({
  label,
  value,
  width,
  tone,
}: {
  label: string;
  value: string;
  width: string;
  tone: string;
}) {
  return (
    <div className={styles.topicRow}>
      <span>{label}</span>
      <div className={styles.topicTrack}>
        <i className={styles[tone]} style={{ width }} />
      </div>
      <b>{value}</b>
    </div>
  );
}

function Track({
  title,
  artist,
  topic,
  note,
}: {
  title: string;
  artist: string;
  topic: string;
  note: string;
}) {
  return (
    <article className={styles.track}>
      <span className={styles.playMark} aria-hidden="true">
        <i />
      </span>
      <div className={styles.trackWords}>
        <b>{title}</b>
        <span>{artist}</span>
      </div>
      <div className={styles.trackMeta}>
        <span className={`${styles.topicChip} ${styles[`${topic}Chip`]}`}>
          {topic}
        </span>
        <small>{note}</small>
      </div>
    </article>
  );
}

function SecurityPreview() {
  return (
    <section
      className={styles.security}
      aria-label="Illustrative packet monitoring and alert workflow"
    >
      <header className={styles.secHeader}>
        <div className={styles.secBrand}>
          <span className={styles.shield} aria-hidden="true">
            <svg viewBox="0 0 24 28">
              <path d="M12 2 21 6v7c0 6-4 10-9 13-5-3-9-7-9-13V6l9-4Z" />
              <path d="m8 14 2.5 2.5L16.5 10" />
            </svg>
          </span>
          <div>
            <b>Network watch</b>
            <span>PACKET MONITOR</span>
          </div>
        </div>
        <span className={styles.monitorState}>
          <i /> MONITORING
        </span>
      </header>
      <div className={styles.secBody}>
        <section className={styles.packetPanel}>
          <div className={styles.secSectionHead}>
            <h2>Observed traffic</h2>
            <span>Scapy capture · sample</span>
          </div>
          <div className={styles.packetTable}>
            <div className={styles.packetLabels}>
              <span>TIME</span>
              <span>FLOW</span>
              <span>INSPECTION</span>
            </div>
            <PacketRow
              time="14:22:08"
              flow="Client → web"
              detail="Allowed source"
              status="CLEAR"
            />
            <PacketRow
              time="14:22:11"
              flow="Client → web"
              detail="Country rule flag"
              status="REVIEW"
              alert
            />
            <PacketRow
              time="14:22:14"
              flow="Client → web"
              detail="Session resumed"
              status="CLEAR"
            />
          </div>
          <p className={styles.privacyNote}>
            Synthetic events · no addresses or packet data shown
          </p>
        </section>
        <section className={styles.eventPanel}>
          <div className={styles.secSectionHead}>
            <h2>Activity record</h2>
            <span>SQLite</span>
          </div>
          <div className={styles.eventRecord}>
            <span className={styles.recordIcon} aria-hidden="true">
              <svg viewBox="0 0 20 20">
                <ellipse cx="10" cy="4" rx="7" ry="2.5" />
                <path d="M3 4v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V4M3 9c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
              </svg>
            </span>
            <div>
              <b>Event stored</b>
              <span>sample · review_required</span>
            </div>
            <i>saved</i>
          </div>
          <div className={styles.alertFlow}>
            <span className={styles.flowNode}>
              Packet
              <br />
              checked
            </span>
            <span className={styles.flowLine} />
            <span className={`${styles.flowNode} ${styles.flowWarn}`}>
              Alert
              <br />
              raised
            </span>
            <span className={styles.flowLine} />
            <span className={styles.flowNode}>
              Operator
              <br />
              response
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

function PacketRow({
  time,
  flow,
  detail,
  status,
  alert = false,
}: {
  time: string;
  flow: string;
  detail: string;
  status: string;
  alert?: boolean;
}) {
  return (
    <div className={`${styles.packetRow} ${alert ? styles.packetAlert : ""}`}>
      <time>{time}</time>
      <b>{flow}</b>
      <span>{detail}</span>
      <i>{status}</i>
    </div>
  );
}

function BattlecodePreview() {
  const walls = [
    [1, 1],
    [2, 1],
    [7, 1],
    [8, 1],
    [1, 2],
    [8, 2],
    [4, 3],
    [5, 3],
    [4, 4],
    [5, 4],
    [1, 6],
    [2, 6],
    [7, 6],
    [8, 6],
    [1, 7],
    [8, 7],
  ];
  const body = [
    [2, 4],
    [2, 5],
    [3, 5],
    [3, 4],
  ];
  return (
    <section
      className={styles.battle}
      aria-label="Illustrative remembered map and body-aware route"
    >
      <header className={styles.battleHeader}>
        <div>
          <span className={styles.battleGlyph} aria-hidden="true">
            <svg viewBox="0 0 28 28">
              <path d="M4 5h7v7H4zM17 5h7v7h-7zM4 18h7v7H4zM17 18h7v7h-7z" />
              <path d="M11 8.5h6M7.5 12v6M20.5 12v6M11 21.5h6" />
            </svg>
          </span>
          <div>
            <b>Remembered map</b>
            <span>SEARCHING A SAFE ROUTE</span>
          </div>
        </div>
        <span className={styles.battleMode}>C++20 · BATTLECODE</span>
      </header>
      <div className={styles.battleBody}>
        <div className={styles.mapWrap}>
          <svg
            className={styles.gameMap}
            viewBox="0 0 300 228"
            role="img"
            aria-label="Sample grid map showing remembered walls, a collector body, a safe route, and a resource"
          >
            <defs>
              <pattern
                id="mapGrid"
                width="25"
                height="25"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M25 0H0v25"
                  fill="none"
                  stroke="#274442"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect x="0" y="0" width="300" height="225" rx="4" fill="#0d2525" />
            <rect x="0" y="0" width="300" height="225" fill="url(#mapGrid)" />
            {walls.map(([x, y]) => (
              <rect
                key={`w-${x}-${y}`}
                x={x * 25 + 3}
                y={y * 25 + 3}
                width="19"
                height="19"
                rx="2"
                fill="#456361"
                stroke="#63807a"
                strokeWidth="1"
              />
            ))}
            <path
              d="M62.5 112.5H87.5V137.5H112.5V162.5H162.5V187.5H212.5"
              fill="none"
              stroke="#d5bb70"
              strokeWidth="3"
              strokeDasharray="5 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {body.map(([x, y], index) => (
              <rect
                key={`b-${x}-${y}`}
                x={x * 25 + 3}
                y={y * 25 + 3}
                width="19"
                height="19"
                rx="6"
                fill={index === 0 ? "#a8d09a" : "#76ab8b"}
                stroke="#c6e1a8"
                strokeWidth="1.2"
              />
            ))}
            <circle cx="62.5" cy="112.5" r="5" fill="#f2df9a" />
            <circle cx="212.5" cy="187.5" r="8" fill="#f3ae75" />
            <circle cx="212.5" cy="187.5" r="3" fill="#7c3e38" />
          </svg>
          <div className={styles.mapLegend}>
            <span>
              <i className={styles.legendWall} />
              remembered tile
            </span>
            <span>
              <i className={styles.legendBody} />
              own body
            </span>
            <span>
              <i className={styles.legendRoute} />
              safe search
            </span>
            <span>
              <i className={styles.legendPearl} />
              resource
            </span>
          </div>
        </div>
        <aside className={styles.strategyNotes}>
          <div className={styles.strategyTitle}>
            <span>MOVE PLANNER</span>
            <b>Survive, then collect</b>
          </div>
          <article>
            <i>01</i>
            <div>
              <b>Map memory</b>
              <span>Route around known walls</span>
            </div>
          </article>
          <article>
            <i>02</i>
            <div>
              <b>Body-aware search</b>
              <span>Keep escape space open</span>
            </div>
          </article>
          <article>
            <i>03</i>
            <div>
              <b>Short resource sprint</b>
              <span>Commit only to a safe path</span>
            </div>
          </article>
          <small>Illustrative gameplay state</small>
        </aside>
      </div>
    </section>
  );
}

function BotfluencerPreview() {
  return (
    <section
      className={styles.bot}
      aria-label="Botfluencer observation ledger with replay and no-op status"
    >
      <header className={styles.botHeader}>
        <div>
          <span className={styles.botMark} aria-hidden="true">
            <svg viewBox="0 0 28 28">
              <path d="M14 3v4M8 7h12a3 3 0 0 1 3 3v11H5V10a3 3 0 0 1 3-3Z" />
              <circle cx="10" cy="13" r="1.4" />
              <circle cx="18" cy="13" r="1.4" />
              <path d="M10 17h8M2 12v6M26 12v6" />
            </svg>
          </span>
          <div>
            <b>Botfluencer</b>
            <span>CAPTURE THE NARRATIVE 2026</span>
          </div>
        </div>
        <span className={styles.botEnv}>FIXTURE MODE</span>
      </header>
      <div className={styles.botBody}>
        <div className={styles.ledgerTop}>
          <div>
            <h2>Observation ledger</h2>
            <span>Replayable sample run</span>
          </div>
          <div className={styles.runState}>
            <i /> RUN COMPLETE
          </div>
        </div>
        <div className={styles.botTable}>
          <div className={styles.botTableHead}>
            <span>OBSERVED</span>
            <span>FIXTURE</span>
            <span>LEDGER ENTRY</span>
            <span>REPLAY</span>
          </div>
          <div className={styles.botRow}>
            <time>09:41:02</time>
            <span className={styles.fixtureLabel}>sample-01</span>
            <div>
              <b>Public post captured</b>
              <small>Observation persisted</small>
            </div>
            <span className={styles.replayDone}>
              <i /> stored
            </span>
          </div>
          <div className={styles.botRow}>
            <time>09:41:08</time>
            <span className={styles.fixtureLabel}>sample-02</span>
            <div>
              <b>Thread context recorded</b>
              <small>Fixture event · no draft</small>
            </div>
            <span className={styles.replayDone}>
              <i /> stored
            </span>
          </div>
          <div className={styles.botRow}>
            <time>09:41:12</time>
            <span className={styles.fixtureLabel}>sample-03</span>
            <div>
              <b>Run action boundary</b>
              <small>Configured action: noop</small>
            </div>
            <span className={styles.replayIdle}>
              <i /> no-op
            </span>
          </div>
        </div>
        <footer className={styles.botFooter}>
          <span>
            <i className={styles.footerDot} /> mock input
          </span>
          <span>
            <i className={styles.footerDot} /> replay
          </span>
          <span>
            <i className={styles.footerDot} /> noop action
          </span>
          <b>Publishing unavailable</b>
        </footer>
      </div>
    </section>
  );
}
