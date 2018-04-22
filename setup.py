from setuptools import setup

setup(
    name='lionshare',
    packages=['lionshare'],
    version='1.0.0',
    license='MIT',
    description='Python wrapper for the Lionshare API',
    author='Abhinav Kasamsetty',
    author_email='abhinavkasamsetty@gmail.com',
    url='https://github.com/abhinavk99/lionshare',
    keywords=['lionshare', 'cryptocurrency', 'api', 'wrapper'],
    install_requires=['requests', 'pytest'],
    tests=[
        'tests/test_lionshare.py'
    ]
)
