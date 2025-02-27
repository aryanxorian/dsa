var twoSum = function(nums, target) {
    const hmap = {}

    for (let i =0; i< nums.length; i++) {
        let complement =  target - nums[i]
        if(hmap.hasOwnProperty(complement)) {
            return [hmap[complement],i]
        }
        
        hmap[nums[i]] = i
    }
};

