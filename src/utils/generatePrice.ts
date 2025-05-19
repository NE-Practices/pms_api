/**
 * Calculate parking price based on check-in and check-out times.
 * Uses a constant rate of 1 hour = 500.
 * Partial hours are rounded up to the next full hour.
 * 
 * @param checkIn Date object representing check-in time
 * @param checkOut Date object representing check-out time
 * @returns number price calculated
 */
export function generatePrice(checkIn: Date, checkOut: Date): number {
    const RATE_PER_HOUR = 500;

    // Calculate difference in milliseconds
    const diffMs = checkOut.getTime() - checkIn.getTime();

    if (diffMs <= 0) {
        return 0; // No charge if invalid or zero duration
    }

    // Convert milliseconds to hours, rounding up partial hours
    const hours = Math.ceil(diffMs / (1000 * 60 * 60));

    return hours * RATE_PER_HOUR;
}
