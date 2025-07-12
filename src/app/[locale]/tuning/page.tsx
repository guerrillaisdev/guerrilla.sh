/**
 * @file src/app/[locale]/tuning/page.tsx
 * @summary Remote tuning page.
 * @journal
 *   - 2025-07-12: Created the initial remote tuning page.
 *     - Added a placeholder for the tuning interface.
 */
import TuningInterface from '@/components/TuningInterface';

export default function TuningPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Remote Tuning</h1>
      <TuningInterface />
    </div>
  );
}