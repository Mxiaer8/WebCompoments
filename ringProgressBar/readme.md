# Usage

------
## install

**npm i ring-progress-bar**
------
## methods

**1. setSize(size)** // set the ring's size; it is not be requested! Its' defalut size is "200px"

**2. show(percent, color)** // set the ring's percent and color; The color is not be requested! Its' defalut color is "red"!

## exmaple

    <template>
        <ring></ring>
    </template>
    <script>
        import ring from 'ring-progress-bar'
        export default {
            name: 'test',
            components: {
                ring
        },
        mounted: function () {
            ring.methods.setSize('200px') 
            ring.methods.show(80, 'green')
        }
    }
    </script>
   
 ## Thank you for your support!