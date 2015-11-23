class cdemo():
    def __init__(self, x=20):
        self.x = 20 # self is always required
    def inc(self):

        # _p would be considered private (just put an underscore before the variable name)
        # we're also creating it as an instance variable in this method
        self._p = 20
        self.x = self.x + 1


# Everything in Python is public, nothing is private

