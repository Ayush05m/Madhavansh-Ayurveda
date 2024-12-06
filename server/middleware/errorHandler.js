const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
        success: false,
        error: {
            message: err.message || 'Server Error',
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};

module.exports = errorHandler; 