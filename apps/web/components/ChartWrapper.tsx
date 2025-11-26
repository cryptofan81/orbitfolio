"use client";
import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function ChartWrapper({ bars = [] }: { bars: { time: string; value: number }[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = createChart(ref.current, { width: ref.current.clientWidth, height: 360, layout: { background: { color: '#FBFCFD' }, textColor: '#0E1418' }});
    const series = chart.addLineSeries({ color: '#0A4D5A' });
    series.setData(bars);
    const resize = () => chart.applyOptions({ width: ref.current?.clientWidth || 600 });
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); chart.remove(); };
  }, [bars]);
  return <div ref={ref} style={{width:'100%'}} />;
}
