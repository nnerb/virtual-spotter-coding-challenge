import { create } from "zustand"
import { StudioPerformance } from "../types/studio-performance";

interface StoreState {
  studioPerformanceData: StudioPerformance[];
  filterType: string; 
  setStudioPerformanceData: (data: StudioPerformance[]) => void; 
  setFilterType: (filter: string) => void;
}

export const useStudioPerformanceStore = create<StoreState>((set) => ({
  studioPerformanceData: [], 
  filterType: '', 
  setStudioPerformanceData: (data: StudioPerformance[]) => set({ studioPerformanceData: data }), 
  setFilterType: (filter: string) => set({ filterType: filter }),
}));
