import { PROCESS } from "./tokens";

/** Native CSS connector: line + ring + interior + center dot + local glow. */
export function ProcessConnector({ index }: { index: 1 | 2 | 3 }) {
  const spec = PROCESS.connectorLines[index - 1];
  const node = PROCESS.connectorNode;
  const nudge = spec.nodeNudgeX;

  return (
    <span
      aria-hidden
      data-process-connector
      data-qa={`connector-${index}-wrap`}
      className="relative block h-[19px] w-full overflow-visible"
    >
      <span
        data-qa={`connector-${index}-glow`}
        className="pointer-events-none absolute rounded-full"
        style={{
          left: nudge,
          top: "50%",
          width: node.glow,
          height: node.glow,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(174,82,83,0.42) 0%, rgba(56,25,22,0.28) 42%, transparent 70%)",
        }}
      />

      <span
        data-process-rail-segment
        data-qa={`connector-${index}-line`}
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: spec.left,
          width: spec.width,
          height: 3,
          background: PROCESS.connector,
        }}
      />

      <span
        data-process-node
        data-qa={`connector-${index}-node`}
        className="absolute top-1/2 flex items-center justify-center rounded-full"
        style={{
          left: nudge,
          transform: "translate(-50%, -50%)",
          width: node.outer,
          height: node.outer,
          border: `${node.border}px solid ${PROCESS.connector}`,
          background: PROCESS.pageBg,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <span
          data-qa={`connector-${index}-node-border`}
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            border: `${node.border}px solid ${PROCESS.connector}`,
            boxSizing: "border-box",
          }}
        />
        <span
          data-qa={`connector-${index}-node-interior`}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: node.interior,
            height: node.interior,
            transform: "translate(-50%, -50%)",
            background: PROCESS.pageBg,
          }}
        />
        <span
          data-qa={`connector-${index}-dot`}
          className="relative z-[1] rounded-full"
          style={{
            width: node.dot,
            height: node.dot,
            background: PROCESS.connector,
          }}
        />
      </span>
    </span>
  );
}
