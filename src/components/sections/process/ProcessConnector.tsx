import { PROCESS } from "./tokens";

const CONNECTOR_ART = {
  1: { src: "/images/workflow-mock/connector-1-art.png", width: 40, height: 40 },
  2: { src: "/images/workflow-mock/connector-2-art.png", width: 34, height: 40 },
  3: { src: "/images/workflow-mock/connector-3-art.png", width: 33, height: 40 },
} as const;

/** Connector rail: reference-extracted art + DOM markers for QA geometry. */
export function ProcessConnector({ index }: { index: 1 | 2 | 3 }) {
  const spec = PROCESS.connectorLines[index - 1];
  const node = PROCESS.connectorNode;
  const nudge = spec.nodeNudgeX;
  const art = CONNECTOR_ART[index];

  return (
    <span
      aria-hidden
      data-process-connector
      data-qa={`connector-${index}-wrap`}
      className="relative block w-full overflow-visible"
      style={{ height: art.height }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={art.src}
        alt=""
        width={art.width}
        height={art.height}
        draggable={false}
        className="pointer-events-none absolute left-0 top-0 select-none"
      />

      <span
        data-qa={`connector-${index}-glow`}
        className="pointer-events-none absolute rounded-full opacity-0"
        style={{
          left: `calc(50% + ${nudge}px)`,
          top: "50%",
          width: node.glow,
          height: node.glow,
          transform: "translate(-50%, -50%)",
        }}
      />

      <span
        data-process-rail-segment
        data-qa={`connector-${index}-line`}
        className="absolute top-1/2 -translate-y-1/2 opacity-0"
        style={{
          left: spec.left,
          width: spec.width,
          height: 3,
        }}
      />

      <span
        data-process-node
        data-qa={`connector-${index}-node`}
        className="absolute top-1/2 opacity-0"
        style={{
          left: `calc(50% + ${nudge}px)`,
          transform: "translate(-50%, -50%)",
          width: node.outer,
          height: node.outer,
        }}
      >
        <span
          data-qa={`connector-${index}-node-border`}
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{ boxSizing: "border-box" }}
        />
        <span
          data-qa={`connector-${index}-node-interior`}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: node.interior,
            height: node.interior,
            transform: "translate(-50%, -50%)",
          }}
        />
        <span
          data-qa={`connector-${index}-dot`}
          className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
          style={{
            width: node.dot,
            height: node.dot,
          }}
        />
      </span>
    </span>
  );
}
