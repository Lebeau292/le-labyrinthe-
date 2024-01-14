function tofpx (n: number) {
    return (n * fpx_scale) | 0
}
let map = img`
    11111111111111111111111111111111
    1.........................1....1
    1.........................1....1
    1...11....................1....1
    1...1....111111111111111111....1
    1...1....1.....................1
    1...1....1.....................1
    1...1....1......11111111111....1
    1...111111......1.........1....1
    1...............1.........1....1
    1...............1..11111111....1
    1...111111......1..1......1....1
    1........1......1..1......1....1
    1........1......1..1..1...11...1
    1........1...1111..1..11...1...1
    1..1111111...1..1..1...1...1...1
    1.........1..1..1..1...1...1...1
    1.........1..1..1..1...1...1...1
    1.........1..1..1..1...11111...1
    1........11..1..1..1...........1
    1..111111....1..1..1...........1
    1..1...1.....1..1..1...........1
    1..1...1.....1..1..1111111111111
    1......1.....1..1..............1
    11111111.....11.1..............1
    2......1........1..............1
    2...............1..............1
    2...............111111111......1
    111111111111...................1
    1..........1...................1
    1..............................1
    11111111111111111111111111111111
    `
let textures = [
img`
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    `,
null,
img`
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777771111111111111177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    777777711999999999f1177777777777
    777777711999999999f1177777777777
    777777711999999999f1177777777777
    777777711999999999f1177777777777
    777777711999999999f1177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771199999999991177777777777
    77777771111111111111177777777777
    `,
null,
img`
    6666666666666666666666bbb6666666
    66666666666666666666bb333b666666
    66666666666666666bbb333d33b66666
    6666666666666666bb333333d3a66666
    66666666666666bb33332eeeedba6666
    666666666666bbb333323eee2e3a6666
    6666666666bbd333333e22222ed3a666
    6666666bbbdd3333333e22222edda666
    666666bb3d333333333be222eb3d3a66
    666bbb3dd33333333333beeeb33d3a66
    66b3ddd33333333333333333333dda66
    bbddd3333333333333333333333dd3a6
    b33dddddd3333333333333333333d3a6
    bb3333333ddddd33333333333333dda6
    bbbbbbb333dd33dddddddddd3333ddba
    b55553bbbbbb3333dd33333ddd33dd3a
    b555555555553bbbbbbbb33333dddd3a
    bd555555555555555dddbaaaaab3d3ba
    bb55555555555555555dddddddbb33ba
    b3bb35555555555d5555d55dddddbbba
    b33333bbb355dd55555d555ddddddbba
    b5555d333333bbb35dddddd55ddddbba
    b5d555dd5553333bbbbb3ddddddddb3a
    b5d555555555555dd3333bbbbbb3db3a
    bd5d555555d55555dd555ddbbbbbbb3a
    bbb55dd555555555555555ddddddbb3a
    666bbbbdd555ddd5555ddddddddddb3a
    6666666bbbb555555d5ddd5ddddddb3a
    66666666666bbbb55555555555dd533a
    666666666666666bbbbddd5d55d5b3ba
    6666666666666666666bbbbddddb3ba6
    66666666666666666666666bbbaaaa66
    `,
null,
img`
    11111111111111bbbbbbb11111111111
    11111111111bb66663333baa11111111
    111111111bb3367776333663aa111111
    11111111b33333888333389633aa1111
    1111111b3333333333333389633aa111
    111111b34443333333333338633bae11
    11111b3455433333333334443333ae11
    1111b33322333dddd3333455233daee1
    111b3d333333dd3bbbb33322333dabe1
    11b3d333333d3bb33bb33333333da4e1
    11bd33333333b33aab3333333223a4ee
    1b3d3663333b33aab33366332442b4ee
    1bd3b983333a3aa3333387633ee3b4ee
    1bd6983333baaa333333387633bb4bee
    b3d6833333bba333333333863ba44ebe
    bdd3333333bb3333333333333a44bebe
    add666633333322333366333ba44bbbe
    ad67776333332442336983d3a444b4e1
    add888b333333ee3369833d3a44b44e1
    add333333333333336833d3a444b4e11
    a3dd3333344433333dddd3a444b44e11
    ab33ddd325543333dd33aa444b44e111
    1eabb3dd32233333baaa4444b44e1111
    1ebabb3d333d33baa444443b44e11111
    11ebaab3ddd3aaa4444433b44e111111
    11eebbaab33a44444333b444e1111111
    111eeebbaab444b333b4444e11111111
    1111ebeeebbbbbbbb4444ee111111111
    11111eebbbb44444444ee11111111111
    1111111eeebbb444eee1111111111111
    1111111111eeeeee1111111111111111
    11111111111111111111111111111111
    `,
null,
img`
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccb5bcccccccccccc
    ccccccccccccccccb5bccccccccccccc
    cccccccccccccbbbbbbccccccccccccc
    ccccccccccccbb55555bcccccccccccc
    cccccccccccbb5d1f55dfccccccccccc
    cccccccccccb551ff5d4cccccccccccc
    cccccccccccb55dfbdd44ccccccccccc
    ccccccccbbbd5555544444bccccccccc
    cccccccbdddbbd5544444bcccccccccc
    cccccccbbd555b555555bccccccccccc
    ccccccccdc5555d555555bcccccccccc
    ccccccccbdcd55b555555bcccccccccc
    cccccccccddccbd55555dbcccccccccc
    ccccccccccbddddd555bbccccccccccc
    ccccccccccccccccccbbcccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    `,
null,
img`
    66666666666666666666888888888888
    66666666666666666666866666666668
    66666666666666666666866666666668
    88888888888886666666866666666668
    87777777777786666666866666666668
    87777777777786666666866666666668
    87777777777786666666866666666668
    87777777777788888888888886666668
    87777777777788666666866686666668
    87777777777788666666866686666668
    87777777777788666666866686666668
    88888888888888666666866686666668
    66666666666668666666888888888888
    66666666666668666666666686666666
    66666666666668666666666686666666
    66666666666668666666666686666666
    66666666666668888888888886666666
    66666666666666666666666666666666
    66666666666666666688888888888888
    88888888888666666686666666666668
    87777777778666666686666666666668
    87777777778666666686666666666668
    87777777778666666686666666666668
    87777777778666666686666666666668
    87777777778666666686666666666668
    87777777778666666686666666666668
    87777777778666666686666666666668
    87777777778666666686666666666668
    88888888888666666688888888888888
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    `,
img`
    99999999999999999999888888888888
    99999999999999999999899999999998
    99999999999999999999899999999998
    88888888888889999999899999999998
    87777777777789999999899999999998
    87777777777789999999899999999998
    87777777777789999999899999999998
    87777777777788888888888889999998
    87777777777788999999899989999998
    87777777777788999999899989999998
    87777777777788999999899989999998
    88888888888888999999899989999998
    99999999999998999999888888888888
    99999999999998999999999989999999
    99999999999998999999999989999999
    99999999999998999999999989999999
    99999999999998888888888889999999
    99999999999999999999999999999999
    99999999999999999988888888888888
    88888888888999999989999999999998
    87777777778999999989999999999998
    87777777778999999989999999999998
    87777777778999999989999999999998
    87777777778999999989999999999998
    87777777778999999989999999999998
    87777777778999999989999999999998
    87777777778999999989999999999998
    87777777778999999989999999999998
    88888888888999999988888888888888
    99999999999999999999999999999999
    99999999999999999999999999999999
    99999999999999999999999999999999
    `,
img`
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11117771177711117771111777177711
    11117771177711117771111777177711
    11117771177711117771111777177711
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    33377733377733377733377733377733
    33377733377733377733377733377733
    33377733377733377733377733377733
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    `,
img`
    99988888888888888888888888888888
    99988888888888888888888888888888
    99988888888888888888888888888888
    22228888888888888888888888888888
    22222222222888888888888888888888
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222998
    99988888888888888888888888888888
    98888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888882
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222228888888888
    22222222222222288888888888888888
    22888888888888888888888888888888
    22888888888888888888888888888888
    99888888888888888888888888888888
    99888888888888888888888888999999
    99888888888888888889999999999999
    `
]
game.stats = true
let t0 = textures[0]
for (let i = 0; i <= textures.length - 1; i++) {
    if (textures[i]) {
        t0 = textures[i]
    } else {
        textures[i] = t0
    }
}
let fpx = 10
let fpx_scale = 1024
let fov = 0.66
class State {
    x: number
    y: number
    map: Image
    dirX: number
    dirY: number
    planeX: number
    planeY: number
    angle: number

    constructor() {
        this.angle = 0
        this.x = tofpx(18)
        this.y = tofpx(7)

        this.setVectors()
        this.map = map.clone()
    }

    private setVectors() {
        const sin = Math.sin(this.angle)
        const cos = Math.cos(this.angle)
        this.dirX = tofpx(cos)
        this.dirY = tofpx(sin)
        this.planeX = tofpx(sin * fov)
        this.planeY = tofpx(cos * -fov)
    }

    private canGo(x: number, y: number) {
        return this.map.getPixel(x >> fpx, y >> fpx) == 0
    }

    updateControls() {
        const dx = controller.dx(2)
        if (dx) {
            this.angle -= dx
            this.setVectors()
        }
        const dy = controller.dy(5)
        if (dy) {
            const nx = this.x - Math.round(this.dirX * dy)
            const ny = this.y - Math.round(this.dirY * dy)
            if (!this.canGo(nx, ny) && this.canGo(this.x, this.y)) {
                if (this.canGo(this.x, ny))
                    this.y = ny
                else if (this.canGo(nx, this.y))
                    this.x = nx
            } else {
                this.x = nx
                this.y = ny
            }
        }
        //if (dx || dy)
        //    console.log(`${this.x},${this.y},${this.angle}`)
    }

    trace() {
        // based on https://lodev.org/cgtutor/raycasting.html
        const w = screen.width
        const h = screen.height
        const one = 1 << fpx
        const one2 = 1 << (fpx + fpx)
        for (let x = 0; x < w; x++) {
            const cameraX: number = Math.idiv((x << fpx) << 1, w) - one
            let rayDirX = this.dirX + (this.planeX * cameraX >> fpx)
            let rayDirY = this.dirY + (this.planeY * cameraX >> fpx)

            let mapX = this.x >> fpx
            let mapY = this.y >> fpx

            // length of ray from current position to next x or y-side
            let sideDistX = 0, sideDistY = 0

            // avoid division by zero
            if (rayDirX == 0) rayDirX = 1
            if (rayDirY == 0) rayDirY = 1

            // length of ray from one x or y-side to next x or y-side
            const deltaDistX = Math.abs(Math.idiv(one2, rayDirX));
            const deltaDistY = Math.abs(Math.idiv(one2, rayDirY));

            let mapStepX = 0, mapStepY = 0

            let sideWallHit = false;

            //calculate step and initial sideDist
            if (rayDirX < 0) {
                mapStepX = -1;
                sideDistX = ((this.x - (mapX << fpx)) * deltaDistX) >> fpx;
            } else {
                mapStepX = 1;
                sideDistX = (((mapX << fpx) + one - this.x) * deltaDistX) >> fpx;
            }
            if (rayDirY < 0) {
                mapStepY = -1;
                sideDistY = ((this.y - (mapY << fpx)) * deltaDistY) >> fpx;
            } else {
                mapStepY = 1;
                sideDistY = (((mapY << fpx) + one - this.y) * deltaDistY) >> fpx;
            }

            let color = 0

            while (true) {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += mapStepX;
                    sideWallHit = false;
                } else {
                    sideDistY += deltaDistY;
                    mapY += mapStepY;
                    sideWallHit = true;
                }

                color = this.map.getPixel(mapX, mapY)
                if (color)
                    break; // hit!
            }

            let perpWallDist = 0
            let wallX = 0
            if (!sideWallHit) {
                perpWallDist = Math.idiv(((mapX << fpx) - this.x + (1 - mapStepX << fpx - 1)) << fpx, rayDirX)
                wallX = this.y + (perpWallDist * rayDirY >> fpx);
            } else {
                perpWallDist = Math.idiv(((mapY << fpx) - this.y + (1 - mapStepY << fpx - 1)) << fpx, rayDirY)
                wallX = this.x + (perpWallDist * rayDirX >> fpx);
            }
            wallX &= (1 << fpx) - 1

            color = (color - 1) * 2
            if (sideWallHit) color++

            const tex = textures[color]
            if (!tex)
                continue

            // textures look much better when lineHeight is odd
            let lineHeight = Math.idiv(h << fpx, perpWallDist) | 1;
            let drawStart = (-lineHeight + h) >> 1;

            let texX = (wallX * tex.width) >> fpx;
            if ((!sideWallHit && rayDirX > 0) || (sideWallHit && rayDirY < 0))
                texX = tex.width - texX - 1;

            screen.blitRow(x, drawStart, tex, texX, lineHeight)
            /*
                        const texStepY = Math.idiv(tex.height << fpx, lineHeight)
                        let texY = 0
                        let i = 0
                        if (drawStart < 0) {
                            i = -drawStart
                            texY = i * texStepY
                            lineHeight += drawStart + 1
                        }
                        for (; i < lineHeight; ++i) {
                            screen.setPixel(x, drawStart + i, tex.getPixel(texX, texY >> fpx))
                            texY += texStepY
                        }
                        */

        }
    }
}
const st = new State()
game.onPaint(function () {
    st.trace()
})
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    st.updateControls()
})
