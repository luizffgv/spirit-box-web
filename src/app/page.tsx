import EvidenceCountPicker from "./_components/evidence-count-picker";
import EvidencePicker from "./_components/evidence-picker";
import GhostList from "./_components/ghost-list";
import EvidenceCountProvider from "./_components/providers/evidence-count-provider";
import EvidenceProvider from "./_components/providers/evidence-provider";

export default function Home() {
  return (
    <EvidenceProvider>
      <EvidenceCountProvider>
        <main className="flex max-w-full grow flex-col items-center justify-between gap-8 overflow-y-auto sm:flex-col-reverse sm:justify-end">
          <GhostList></GhostList>
          <div className="flex max-w-full flex-row flex-wrap justify-center gap-4">
            <EvidenceCountPicker></EvidenceCountPicker>
            <EvidencePicker></EvidencePicker>
          </div>
        </main>
      </EvidenceCountProvider>
    </EvidenceProvider>
  );
}