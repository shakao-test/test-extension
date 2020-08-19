
/**
 * Custom blocks
 */
//% weight=100 color=#cd96aa icon=""
namespace custom {

    //% block
    //% help=github:test-extension/custom-help
    export function spawnTwoChickens(): void {
        // Add code here
        mobs.spawn(CHICKEN, pos(0, 0, 0))
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    //% help=none
    export function jump(): void {
        player.teleport(pos(0, 30, 0))
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function jump2(): void {
        player.teleport(pos(0, 30, 0))
    }
}
