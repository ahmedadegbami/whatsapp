export type Room = "earth" | "mars";

export const isRoom = (room: string): room is Room => {
    return room === "earth" || room === "mars";
}