import {  WidgetsGrids } from '@/components/dashboard/WidgetGrids';

 
export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Hello Main Page</h1>
      <span className="text-xl"> Información general</span>

      <WidgetsGrids />
 
    </div>
  );
}